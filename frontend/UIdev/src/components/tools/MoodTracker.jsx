import React, { useState } from 'react';
import Calendar from '../ui/calander';
import { Label } from '../ui/label';
import { useToast } from '../ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Smile, Meh, Frown } from 'lucide-react';
import { Button } from '../ui/button';

const moodOptions = [
  { value: 'great', label: 'Great', icon: <Smile className="h-8 w-8 text-green-500" />, color: 'bg-green-100 hover:bg-green-200' },
  { value: 'good', label: 'Good', icon: <Smile className="h-8 w-8 text-blue-500" />, color: 'bg-blue-100 hover:bg-blue-200' },
  { value: 'okay', label: 'Okay', icon: <Meh className="h-8 w-8 text-yellow-500" />, color: 'bg-yellow-100 hover:bg-yellow-200' },
  { value: 'bad', label: 'Bad', icon: <Frown className="h-8 w-8 text-orange-500" />, color: 'bg-orange-100 hover:bg-orange-200' },
  { value: 'awful', label: 'Awful', icon: <Frown className="h-8 w-8 text-red-500" />, color: 'bg-red-100 hover:bg-red-200' },
];

const MoodTracker = () => {
  const [date, setDate] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState(null);
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState([]);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedMood) {
      toast({
        title: "Mood required",
        description: "Please select a mood before saving",
        variant: "destructive"
      });
      return;
    }
    
    const newEntry = {
      date: new Date(date),
      mood: selectedMood,
      notes: notes
    };
    
    setEntries(prevEntries => [...prevEntries, newEntry]);
    toast({
      title: "Mood logged",
      description: "Your mood has been saved successfully"
    });
    
    // Reset form
    setSelectedMood(null);
    setNotes('');
  };

  // Helper function to format dates
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Mood Tracking Card */}
      <Card className="md:col-span-2 shadow-lg shadow-gray-500 border border-gray-300 p-4">
        <CardHeader>
          <CardTitle>How are you feeling today?</CardTitle>
          <CardDescription>Track your mood to identify patterns over time</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Label className="mb-2 block">Select your mood</Label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {moodOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`${option.color} ${selectedMood === option.value ? "ring-2 ring-mindspace-blue" : ""} p-4 rounded-lg flex flex-col items-center transition-all`}
                    onClick={() => setSelectedMood(option.value)}
                  >
                    {option.icon}
                    <span className="mt-2 text-xs text-black">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="notes" className="mb-2 block">Notes (optional)</Label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 border rounded-lg h-24"
                placeholder="What's contributing to your mood today?"
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <Button type="submit" variant="default">Save Entry</Button>
            </div>
          </form>
          <div className="flex justify-start">
              <Button type="submit" variant="default">See Last Entry</Button>
          </div>

        </CardContent>
      </Card>
      
      {/* Calendar Card with adjusted width */}
      <Card className="md:col-span-1 shadow-lg shadow-gray-500 border border-gray-300 flex-grow">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>Select a date to log your mood</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            initialDate={date}
            onDateSelect={(selected) => {
              if (selected) setDate(selected);
            }}
          />
        </CardContent>
      </Card>
      
      {/* Recent Entries Card with adjusted width */}
      {entries.length > 0 && (
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Entries</CardTitle>
            <CardDescription>Your mood history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {entries.slice().reverse().map((entry, index) => {
                const moodOption = moodOptions.find(option => option.value === entry.mood);
                
                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      {moodOption?.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium">{formatDate(entry.date)}</div>
                      <div className="text-sm text-gray-500">Feeling: {moodOption?.label}</div>
                      {entry.notes && <div className="mt-1 text-sm">{entry.notes}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MoodTracker;

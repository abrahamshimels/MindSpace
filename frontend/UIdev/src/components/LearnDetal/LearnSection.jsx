import React, { useState, useEffect } from "react";
import Image from "../../assets/image/luiz-rogerio-nunes-gkJYH0FLtt0-unsplash.jpg";

function LearnSection({ topic }) {
  return (
    <div>
      <div className="flex justify-center ">
        <img
          className="w-150 h-100 object-cover mt-18"
          src={Image}
          alt="image"
        />
      </div>
      <h1 className="font-poppins text-2xl mt-7 font-semibold mb-6 text-center">Anxiety and it impact</h1>

      <p className=" pl-7 pr-7 pb-7">
        Anxiety is a natural human emotion characterized by feelings of worry,
        nervousness, or unease, typically about an event or something with an
        uncertain outcome. It can range in intensity from mild unease to a
        debilitating sense of panic. While everyone experiences anxiety
        occasionally, it becomes a concern when these feelings are excessive,
        persistent, and interfere with daily life. Physiologically, anxiety
        often manifests with physical symptoms such as a racing heart, sweating,
        trembling, shortness of breath, and digestive issues, triggered by the
        body's "fight-or-flight" response being activated even in the absence of
        immediate danger.
      </p>
      <p className="p-7">
        At its core, anxiety involves a complex interplay of brain chemistry and
        life experiences. Neurotransmitters, such as serotonin and
        norepinephrine, play a significant role in regulating mood and anxiety
        levels. Imbalances in these chemicals can contribute 1 to heightened
        anxiety. Furthermore, past traumatic experiences, learned behaviors, and
        ongoing stressors can significantly shape an individual's susceptibility
        to anxiety. The way we perceive and interpret events also influences our
        anxiety levels; a tendency towards negative thinking or catastrophizing
        can exacerbate anxious feelings.
      </p>
      <p className="p-7">
        When anxiety becomes chronic and overwhelming, it can develop into
        various anxiety disorders, such as generalized anxiety disorder, panic
        disorder, social anxiety disorder, and phobias. These conditions are
        characterized by persistent and excessive worry that is difficult to
        control and often leads to avoidance behaviors. Recognizing the
        difference between normal, transient anxiety and a more pervasive
        anxiety disorder is crucial for seeking appropriate support and
        interventions, which can include therapy, medication, and lifestyle
        adjustments.
      </p>
    </div>
  );
}

export default LearnSection;

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What is this walk-to-earn project?
          </AccordionTrigger>
          <AccordionContent>
            Our platform rewards users with crypto tokens for walking and
            staying active. Simply track your steps and earn rewards!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I start earning?</AccordionTrigger>
          <AccordionContent>
            Download our app, connect your step tracker, and start walking. The
            more you walk, the more rewards you earn!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Is there a minimum step count to earn rewards?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you need to complete a minimum of 1,000 steps per day to start
            accumulating rewards.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How can I withdraw my rewards?</AccordionTrigger>
          <AccordionContent>
            You can withdraw your earned tokens to your crypto wallet or use
            them for in-app purchases and rewards.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;

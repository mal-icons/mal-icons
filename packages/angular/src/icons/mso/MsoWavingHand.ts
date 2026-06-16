import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-waving-hand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWavingHand {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m434-498 276-275q9-9 21-9t21 9q9 9 9 21t-9 21L476-455l-42-43Zm104 104 247-247q9.07-9 21.53-9Q819-650 828-641.16q9 8.84 9 21T828-599L580-351l-42-43ZM195-199q-91-91-91.5-218T194-635l122-122 42 42q12 12 19.5 28t8.5 30l163-164q9.07-9 21.53-9Q583-830 592-820.95q9 9.05 9 21.5Q601-787 592-778L389-575l-65 65 26 26q42 42 40.5 100.5T347-283l-7 7-42-43 7-7q25-25 25.5-58.5T307-442l-47-47q-9-9.07-9-21.53Q251-523 260-532l56-55q17-17 17-42.5T316-672l-80 80q-73 73-72.5 175T237-242q74 74 177 75.5T590-238l241-241q9.07-9 21.53-9Q865-488 874-479.16q9 8.84 9 21T874-437L633-196q-91 91-219 89.5T195-199Zm217-217ZM689-40l1-60q71 0 120.5-49.5T860-270l60-1q0 95.85-67.57 163.43Q784.85-40 689-40ZM40-689q0-95.85 67.58-163.43Q175.15-920 271-920l-1 60q-71 0-120.5 49.5T100-690l-60 1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWavingHand;

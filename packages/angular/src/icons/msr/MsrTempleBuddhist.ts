import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-temple-buddhist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTempleBuddhist {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-80q-24.75 0-42.37-17.62T160-140v-314q-41-10-71-36t-42-63q-5-14 4-25t26.33-11Q86-589 94.5-583q8.5 6 12.5 17 9.92 24 31.96 40T189-510h51v-104q-41-10-71-36t-42-63q-5-14 4-25t26.33-11q8.67 0 17.17 6 8.5 6 12.5 17 9.92 24 31.96 40t49.77 16H293l163-218q4.5-6 10.88-9T480-900q6.75 0 13.13 3T504-888l163 218h24.27q27.73 0 49.77-16T773-726q4-11 13-17t17.59-6Q820-749 829-738t4 25q-12 37-42 63t-71 36v104h51q28 0 50.04-16 22.04-16 31.96-40 4-11 13-17t17.59-6Q900-589 909-578t4 25q-12 37-42 63t-71 36v314q0 24.75-17.62 42.38T740-80H530v-160q0-21.25-14.32-35.62Q501.35-290 480.18-290 459-290 444.5-275.62 430-261.25 430-240v160H220Zm148-590h224L480-819 368-670Zm-68 160h360v-100H300v100Zm-80 370h150v-100q0-45.83 32.12-77.92 32.12-32.08 78-32.08Q526-350 558-317.92q32 32.08 32 77.92v100h150v-310H220v310Zm260-310Zm0-220Zm0 160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTempleBuddhist;

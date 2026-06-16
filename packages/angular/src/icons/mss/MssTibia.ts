import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tibia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTibia {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m360-592-85-85q-17-17-26-38.5t-9-45.5q0-50 34.5-84.5T358-880h244q49 0 82.5 35t33.5 84q0 24-9.5 46.5T682-675l-82 82v222l84 84q17 17 26 39t9 46q0 51-35 86t-85.32 35Q575-81 553-90t-39-26q-7-7-15.5-10.5T480-130q-10 0-18.5 3.5T446-116q-17 17-39 26t-46 9q-51 0-86.5-35T239-202q0-24 9.5-46t26.5-39l85-83v-222Zm60-17v256q0 3.83-2 7.41T414-339l-96 95q-8 8-13 19.44-5 11.44-5 23.64Q300-175 317.5-157.5 335-140 360.93-140q12.2 0 23.64-5Q396-150 404-158q15-15 35-23t41-8q21 0 41 8t35 23q8 8 19.44 13 11.44 5 23.64 5Q625-140 642.5-157.5 660-175 660-200.92q0-12.2-5-23.64Q650-236 642-244l-96-95q-2.5-3-4.25-6.5T540-353v-256q0-3.83 1-7.41t4-6.59l95-96q8-8 13-19.35t5-23.45Q658-786 641.5-803T601-820H358q-24.84 0-41.92 17T299-761.16q0 12.42 5 23.29Q309-727 317-719l97 96q3 2.5 4.5 6.25T420-609Zm60 129Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTibia;

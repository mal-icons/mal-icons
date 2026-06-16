import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-replay-30",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssReplay30 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-75 0-140.5-28T225-185q-49-49-77-114.5T120-440h60q0 125 87.32 212.5Q354.64-140 480-140t212.68-87.32Q780-314.64 780-440t-85-212.68Q610-740 485-740h-22l73 73-42 42-147-147 147-147 41 41-78 78h23q75 0 140.5 28T735-695q49 49 77 114.5T840-440q0 75-28 140.5T735-185q-49 49-114.5 77T480-80ZM281-310v-50h121v-56h-82v-49h82v-57H281v-49h171v261H281Zm228 0v-261h171v261H509Zm50-50h71v-162h-71v162Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssReplay30;

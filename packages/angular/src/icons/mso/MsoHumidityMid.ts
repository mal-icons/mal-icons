import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-humidity-mid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHumidityMid {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-100q-133 0-226.5-91.71T160-415q0-63.14 24.5-120.77Q209-593.4 254-637.5L480-860l226 222.5q45 44.1 69.5 101.73Q800-478.14 800-415q0 131.58-93.5 223.29T480-100ZM220-415h520q0-51-19.5-97T666-593L480-776 294-593q-35 35-54.5 81.04Q220-465.92 220-415Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHumidityMid;

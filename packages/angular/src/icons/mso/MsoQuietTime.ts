import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-quiet-time",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoQuietTime {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M524-40q-84 0-157.5-32t-128-86.5Q184-213 152-286.5T120-444q0-146 93-257.5T450-840q-18 98 11 192.64 29 94.64 100 165.74 71 71.1 165.5 100.14Q821-352.44 920-370.47q-26 144.21-138 237.34Q670-40 524-40Zm0-60q100 0 182-57t132-145q-90-8-173-41.5T518.5-440Q455-503 422-585.5T381-757q-88 48-144.5 130.5T180-444q0 143.33 100.33 243.67Q380.67-100 524-100Zm-6-340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoQuietTime;

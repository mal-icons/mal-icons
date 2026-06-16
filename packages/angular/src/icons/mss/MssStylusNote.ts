import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-stylus-note",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssStylusNote {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m499-259 364-363-81-80-363 363 80 80Zm-280 48q-88-6-133.5-40.5T40-349q0-60 51-98t142-46q44-4 65.5-16t21.5-33q0-29-29-44.5T194-609l5-60q89 9 135 41t46 86q0 46-37.5 75T238-433q-69 5-103.5 26T100-349q0 35 30.5 54.5T222-271l-3 60Zm299 18L353-358l429-429 166 165-430 429Zm0 0-208 43 43-208 165 165Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssStylusNote;

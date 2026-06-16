import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-connecting-airports",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoConnectingAirports {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M643-104 539-280H413q-13 0-21.5-8.5T383-310q0-13 8.5-21.5T413-340h126l104-176h25l-52 176h132l30-40h22l-21 70 21 70h-22l-30-40H616l52 176h-25ZM292-444l52-176H212l-30 40h-22l21-70-21-70h22l30 40h132l-52-176h25l104 176h126q13 0 21.5 8.5T577-650q0 13-8.5 21.5T547-620H421L317-444h-25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoConnectingAirports;

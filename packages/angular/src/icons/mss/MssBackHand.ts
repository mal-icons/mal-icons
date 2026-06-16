import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-back-hand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssBackHand {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M507-40q-93 0-171.5-47.5T209-215L60-463l57-57 163 121v-441h60v558L161-414l98 164q38 69 104 109.5T507-100q113.38 0 193.19-78Q780-256 780-368v-432h60v432q0 137-97.5 232.5T507-40Zm-60-450v-430h60v430h-60Zm167 0v-390h60v390h-60ZM471-295Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssBackHand;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-front-hand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFrontHand {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M493-490v-430h60v430h-60Zm-167 0v-390h60v390h-60ZM495.06-40q-139.94 0-237.5-97Q160-234 160-374v-426h60v426q0 114.87 79.8 194.44Q379.59-100 494.8-100T691-180.5Q772-261 780-376v-154h-10q-21.25 0-35.62 14.38T720-480v150H610q-38 0-64 26t-26 64v30h-60v-30q0-63 43.5-106.5T610-390h50v-450h60v262q11-6 24-9t26-3h70v214q-8 141-106.5 238.5T495.06-40ZM530-345Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFrontHand;

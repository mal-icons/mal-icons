import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-crib",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCrib {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-380h520v-160H420v-200H320q-42 0-71 29t-29 71v260Zm260.25 240q22.75 0 45.25-3t44.5-10v-167H390v167q22 7 44.75 10t45.5 3ZM480-80q-75.4 0-144.2-28Q267-136 211-187l43-43q17.19 15.75 36.09 28.88Q309-188 330-177v-143H220q-24 0-42-18t-18-42v-260q0-66 47-113t113-47h160v200h260q24 0 42 18t18 42v160q0 24-18 42t-42 18H630v143q20.82-11.31 39.91-24.15Q689-214 706-230l43 43q-56 51-124.8 79T480-80Zm0-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCrib;

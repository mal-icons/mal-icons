import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-electric-rickshaw",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssElectricRickshaw {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M227.91-280q-42.09 0-75-26Q120-332 110.4-374H40v-466h620l186 241v85q34 15 54 45.27 20 30.26 20 67.74 0 51-35 86t-86 35q-42 0-74.34-26.44Q692.32-332.87 680-374H346q-12 41-44 67.5T227.91-280ZM100-638h189v-142H100v142Zm249 204h236v-346H349v142h141v60H349v144Zm296-157h127L645-755v164ZM228.05-340Q254-340 271.5-357.55q17.5-17.55 17.5-43.5Q289-427 271.45-444.5q-17.55-17.5-43.5-17.5Q202-462 184.5-444.45q-17.5 17.55-17.5 43.5Q167-375 184.55-357.5q17.55 17.5 43.5 17.5Zm571 0Q825-340 842.5-357.55q17.5-17.55 17.5-43.5Q860-427 842.45-444.5q-17.55-17.5-43.5-17.5Q773-462 755.5-444.45q-17.5 17.55-17.5 43.5Q738-375 755.55-357.5q17.55 17.5 43.5 17.5ZM517-40 282-161h161v-74l235 114H517v81ZM100-578v144h12q11-38 43.5-63t72.5-25q16.77 0 32.03 5T289-502v-76H100Zm545 144h37q11-36 39-60.5t65-24.5v-12H645v97Zm37-97h-37 141-104Zm-570-47h-12 189-177Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssElectricRickshaw;

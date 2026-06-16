import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-9k-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mss_9kPlus {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M233-360h170v-240H233v137h120v53H233v50Zm50-136v-71h70v71h-70Zm183 136h50v-90l84 90h66L554-480l112-120h-66l-84 90v-90h-50v240Zm210-40h40v-63h64v-33h-64v-64h-40v64h-63v33h63v63ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mss_9kPlus;

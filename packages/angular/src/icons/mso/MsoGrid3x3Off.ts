import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-grid-3x3-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoGrid3x3Off {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m712-333-60-60h148v60h-88Zm-85-85L418-627h149v-173h60v173h173v60H627v149ZM393-653l-60-60v-87h60v147ZM821-54 627-247v87h-60v-147l-26-26H393v173h-60v-173H160v-60h173v-148l-26-26H160v-60h86L70-803l43-43L863-96l-42 42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoGrid3x3Off;

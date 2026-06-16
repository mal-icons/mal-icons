import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-balcony",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBalcony {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M330-500v-60h60v60h-60Zm240 0v-60h60v60h-60ZM120-80v-320h40v-160q0-66 25-124.5t68.5-102Q297-830 355.5-855T480-880q66 0 124.5 25t102 68.5Q750-743 775-684.5T800-560v160h40v320H120Zm60-60h105v-200H180v200Zm165 0h105v-200H345v200ZM220-400h230v-418q-99 12-164.5 85T220-560v160Zm290 0h230v-160q0-100-65.5-173T510-818v418Zm0 260h105v-200H510v200Zm165 0h105v-200H675v200Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBalcony;

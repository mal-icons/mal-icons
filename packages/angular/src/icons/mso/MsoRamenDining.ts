import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-ramen-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRamenDining {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M376-140h207v-56l36-15q74-31 121-81t67-109H152q20 59 68 109.5T340-211l36 15v56Zm-60 60v-78q-105-42-167-122T80-460h72v-339l728-81v50l-478 53v87h478v50H402v180h477q-6 100-69 180T643-158v78H316Zm-14-610h50v-82l-50 6v76Zm-100 0h50v-71l-50 5.68V-690Zm100 230h50v-180h-50v180Zm-100 0h50v-180h-50v180Zm278 320Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRamenDining;

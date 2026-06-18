import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-homeadvisor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHomeadvisor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.98 2.44H8.02L0 10.46h2.28l6.88-6.88 6.88 6.88H24l-8.02-8.02m-0.49 9.35L9.16 5.46 4.01 10.61v4.99a1.33 1.33 0 0 0 1.33 1.33h6.08l4.64 4.64v-4.64h2.6a1.33 1.33 0 0 0 1.33-1.33V11.79h-4.49Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHomeadvisor;

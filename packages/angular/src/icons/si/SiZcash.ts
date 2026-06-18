import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zcash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZcash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0A12 12 0 0 0 0 12a12.01 12.01 0 0 0 12 12 12 12 0 1 0 0-24zm-1.01 4.42h2.01v2.01l3.280v1.83l-5.08 6.89h5.08v2.42h-3.27v2.01h-2.01v-2.01H7.72v-1.83l5.07-6.89H7.72V6.43h3.27V4.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZcash;

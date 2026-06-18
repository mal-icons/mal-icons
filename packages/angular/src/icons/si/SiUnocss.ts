import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-unocss",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiUnocss {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.86 18.4c0-3.08 2.49-5.57 5.57-5.57S24 15.32 24 18.4c0 3.08-2.49 5.57-5.57 5.57s-5.57-2.49-5.57-5.57ZM12.86 5.6c0-3.08 2.49-5.57 5.57-5.57S24 2.52 24 5.6v5.01a0.560.56 0 0 1-0.560.56H13.42a0.560.56 0 0 1-0.56-0.56v-5.01ZM11.14 18.4c0 3.08-2.49 5.57-5.57 5.57C2.49 23.97 0 21.48 0 18.4v-5.01a0.560.56 0 0 1 0.56-0.56h10.03a0.560.56 0 0 1 0.560.56v5.01Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiUnocss;

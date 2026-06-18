import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-facebook-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlFacebookCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.240.2 2.240.2v2.46h-1.26c-1.24 0-1.630.77-1.63 1.56v1.88h2.77l-0.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlFacebookCircle;

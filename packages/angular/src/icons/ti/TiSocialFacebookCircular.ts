import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-social-facebook-circular",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiSocialFacebookCircular {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.35 5.62c-1.75-1.74-3.89-2.62-6.35-2.62-2.49 0-4.630.88-6.37 2.63-1.74 1.74-2.63 3.89-2.63 6.38 0 2.470.88 4.6 2.62 6.35 1.74 1.76 3.89 2.65 6.38 2.65 2.47 0 4.61-0.89 6.36-2.64 1.76-1.75 2.64-3.89 2.64-6.36 0-2.49-0.89-4.63-2.65-6.38zm-1.41 11.32c-1.14 1.14-2.44 1.79-3.94 1.99v-4.93h2v-2h-2v-1.4c0-0.330.27-0.60.6-0.6h1.4v-2h-1.4c-0.74 0-1.360.27-1.860.82-0.50.55-0.75 1.22-0.75 2.01v1.17h-2v2h2v4.93c-1.52-0.19-2.83-0.84-3.96-1.98-1.37-1.38-2.04-3-2.04-4.95 0-1.970.67-3.59 2.04-4.96 1.37-1.37 2.99-2.04 4.96-2.04 1.95 0 3.560.67 4.95 2.04 1.38 1.37 2.06 2.99 2.06 4.96 0 1.94-0.67 3.56-2.06 4.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiSocialFacebookCircular;

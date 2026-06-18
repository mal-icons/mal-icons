import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-digitalocean",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlDigitalocean {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.01 21.99v-3.88c4.1 0 7.29-4.07 5.71-8.39a5.81 5.81 0 0 0-3.46-3.45c-4.32-1.56-8.39 1.61-8.39 5.71H2.01c0-6.54 6.33-11.64 13.18-9.5 2.990.94 5.38 3.32 6.31 6.31 2.14 6.86-2.96 13.18-9.5 13.18z"}],["path",{"d":"M12.02 18.14H8.15v-3.87h3.87zm-3.86 2.96H5.19v-2.96h2.96zm-2.96-2.96H2.71v-2.48h2.48v2.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlDigitalocean;

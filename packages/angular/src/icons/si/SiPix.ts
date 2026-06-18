import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-pix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPix {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.28 18.36a3.51 3.51 0 0 0 2.49-1.03l3.6-3.6a0.680.68 0 0 1 0.95 0l3.61 3.61a3.5 3.5 0 0 0 2.49 1.03h0.71l-4.56 4.56a3.65 3.65 0 0 1-5.16 0L4.85 18.36ZM18.43 5.63a3.51 3.51 0 0 0-2.49 1.03l-3.61 3.61a0.670.67 0 0 1-0.95 0l-3.6-3.6A3.51 3.51 0 0 0 5.28 5.64h-0.43l4.57-4.57a3.65 3.65 0 0 1 5.16 0l4.56 4.56ZM1.07 9.42 3.79 6.7h1.49a2.48 2.48 0 0 1 1.740.72l3.6 3.6a1.73 1.73 0 0 0 2.44 0l3.61-3.61a2.48 2.48 0 0 1 1.74-0.72h1.77l2.74 2.74a3.65 3.65 0 0 1 0 5.16l-2.74 2.74h-1.77a2.48 2.48 0 0 1-1.74-0.72l-3.61-3.61a1.77 1.77 0 0 0-2.44 0l-3.6 3.6a2.48 2.48 0 0 1-1.740.72H3.79l-2.72-2.72a3.65 3.65 0 0 1 0-5.16"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPix;

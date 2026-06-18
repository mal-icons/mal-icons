import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-space-ship-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSpaceShipFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.88 18.05C4.23 12.06 7.08 6.63 11 2.18C11.11 2.06 11.25 1.91 11.41 1.73L11.41 1.73C11.71 1.4 12.22 1.38 12.54 1.68C12.56 1.7 12.57 1.71 12.59 1.73C12.76 1.91 12.89 2.06 13 2.18C16.93 6.63 19.77 12.06 21.12 18.05C18.98 18.5 16.78 18.8 14.54 18.92L12.45 23.1C12.32 23.35 12.02 23.45 11.78 23.32C11.68 23.28 11.6 23.2 11.55 23.1L9.46 18.92C7.22 18.8 5.02 18.5 2.88 18.05ZM12 15C13.66 15 15 13.65 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.65 10.34 15 12 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSpaceShipFill;

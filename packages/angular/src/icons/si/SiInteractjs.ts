import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-interactjs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiInteractjs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.380.01C12.260.01 12.13 0 12 0A12 12 0 0 0 1.8 18.33l9.91-17.17zm7.1 19.69L11.2 5.12 2.79 19.69l0.010.01h16.68zm0.18 1.54H4.34a12 12 0 0 0 15.33 0zm2.92-3.57A12 12 0 0 0 12.380.01l0.67 1.15zM12.380.01l00h0V0.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiInteractjs;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-how-to-vote",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtHowToVote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 19h14v1H5z","opacity":".3"}],["path",{"d":"M18 13h-0.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.10.89 2 1.99 2H19a2 2 0 0 0 2-2v-4l-3-3zm1 7H5v-1h14v1z"}],["path",{"d":"M12.05 12.91 8.51 9.36l4.95-4.95 3.54 3.54z","opacity":".3"}],["path",{"d":"M19.11 7.25 14.16 2.3a0.980.98 0 0 0-1.4-0.01L6.39 8.66a11 0 0 0 0 1.41l4.95 4.95c0.390.39 1.020.39 1.41 0l6.36-6.36a11 0 0 0 0-1.41zm-7.06 5.65L8.51 9.36l4.95-4.95L17 7.95l-4.95 4.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtHowToVote;

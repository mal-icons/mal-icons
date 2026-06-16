import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-imagesearch-roller",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtImagesearchRoller {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4h10v2H8zm4 13h2v4h-2z","opacity":".3"}],["path",{"d":"M20 7V3c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v1H4c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2h8v3h-1c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1h-1v-3c0-1.1-0.9-2-2-2H4V6h2v1c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1zM8 4h10v2H8V4zm6 17h-2v-4h2v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtImagesearchRoller;

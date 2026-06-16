import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-branding-watermark",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBrandingWatermark {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 19h18V5H3v14zm8-7h9v6h-9v-6z","opacity":".3"}],["path",{"d":"M21 3H3c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBrandingWatermark;

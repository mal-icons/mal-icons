import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-picture-as-pdf",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPictureAsPdf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6H2v14c0 1.10.9 2 2 2h14v-2H4V6z"}],["path",{"d":"M10 9h1v1h-1zm4 0h1v3h-1zm-6 7h12V4H8v12zm9-8h2v1h-1v1h1v1h-1v2h-1V8zm-4 0h2c0.55 0 1 0.45 1 1v3c0 0.55-0.45 1-1 1h-2V8zM9 8h2c0.55 0 1 0.45 1 1v1c0 0.55-0.45 1-1 1h-1v2H9V8z","opacity":".3"}],["path",{"d":"M20 2H8c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14H8V4h12v12zm-4-4V9c0-0.55-0.45-1-1-1h-2v5h2c0.55 0 1-0.45 1-1zm-2-3h1v3h-1V9zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1H9v5h1v-2zm0-2h1v1h-1V9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPictureAsPdf;

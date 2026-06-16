import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-request-quote",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtRequestQuote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 20V4h7v4h5v12H6zm5-1h2v-1h1c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1h-3v-1h4v-2h-2V9h-2v1h-1c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3v1H9v2h2v1z","opacity":".3"}],["path",{"d":"M14 2H6c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V8l-6-6zM6 20V4h7v4h5v12H6zm5-1h2v-1h1c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1h-3v-1h4v-2h-2V9h-2v1h-1c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3v1H9v2h2v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtRequestQuote;

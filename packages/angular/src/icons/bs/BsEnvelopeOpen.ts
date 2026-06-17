import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-envelope-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEnvelopeOpen {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.47 1.32a1 1 0 0 0-0.94 0l-6 3.2A1 1 0 0 0 1 5.4v0.82l5.75 3.45L8 8.92l1.250.75L15 6.22V5.4a1 1 0 0 0-0.53-0.88zM15 7.38l-4.78 2.87L15 13.12zm-0.04 6.88L8 10.08l-6.96 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 0.97-0.74ZM1 13.12l4.78-2.87L1 7.38v5.73ZM7.060.44a2 2 0 0 1 1.88 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.06-1.76z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEnvelopeOpen;

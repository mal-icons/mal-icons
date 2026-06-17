import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bootstrap-reboot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBootstrapReboot {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.16 8a6.84 6.84 0 1 0 6.84-6.840.580.58 0 1 1 0-1.16 8 8 0 1 1-6.56 3.41l-0.66-0.58a0.580.58 0 0 1 0.23-1l2.52-0.69a0.580.58 0 0 1 0.730.63l-0.33 2.59a0.580.58 0 0 1-0.960.36l-0.64-0.56A6.8 6.8 0 0 0 1.16 8z"}],["path",{"d":"M6.64 11.67V8.84h1.57l1.5 2.83h1.31L9.38 8.66c0.9-0.3 1.43-1.11 1.43-2.1 0-1.37-0.94-2.25-2.46-2.25H5.5v7.35zm0-3.75V5.28h1.57c0.88 0 1.420.5 1.42 1.32 0 0.84-0.5 1.32-1.39 1.32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBootstrapReboot;

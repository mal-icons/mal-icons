import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-library-add-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLibraryAddCheck {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H8c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-8.24 11.28L9.69 11.2c-0.38-0.39-0.38-1.01 0-1.4a11 0 0 1 1.41 0l1.36 1.37 4.42-4.46a11 0 0 1 1.41 0c0.380.390.38 1.01 0 1.4l-5.13 5.17c-0.370.4-1.010.4-1.4 0zM3 6c-0.55 0-1 0.45-1 1v13c0 1.10.9 2 2 2h13c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1-0.45-1-1V7c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLibraryAddCheck;

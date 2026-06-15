import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-zoom-in",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgZoomIn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15.34 15.24C17.69 12.9 17.69 9.1 15.34 6.76C13 4.41 9.2 4.41 6.86 6.76C4.51 9.1 4.51 12.9 6.86 15.24C9.2 17.59 13 17.59 15.34 15.24ZM16.76 5.34C19.64 8.23 19.86 12.77 17.42 15.91C17.43 15.92 17.45 15.94 17.46 15.95L21.71 20.19C22.1 20.58 22.1 21.22 21.71 21.61C21.32 22 20.68 22 20.29 21.61L16.05 17.36C16.04 17.35 16.02 17.33 16.01 17.32C12.87 19.76 8.33 19.54 5.44 16.66C2.32 13.53 2.32 8.47 5.44 5.34C8.57 2.22 13.63 2.22 16.76 5.34ZM10.1 7H12.1V10H15.1V12H12.1V15H10.1V12H7.1V10H10.1V7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgZoomIn;

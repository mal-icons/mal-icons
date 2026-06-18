import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-aperture",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxAperture {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2zm2.11 13H9.99l-1.72-3.09L10.2 9h3.74l1.87 3.06L14.11 15zM4 12c0-0.950.19-1.870.51-2.73L7.7 15H4.61A7.76 7.76 0 0 1 4 12zm12.28-3h3.11A7.74 7.74 0 0 1 20 12c0 0.84-0.14 1.66-0.4 2.43L16.28 9zm1.91-2h-6.65l1.91-2.86c1.890.36 3.56 1.4 4.75 2.86zm-7.09-2.94L9.13 7H9v0.2L7.17 9.94 5.65 7.21c1.3-1.7 3.25-2.89 5.44-3.15zM5.81 17h7.15l-1.71 2.96C9.08 19.75 7.14 18.63 5.81 17zm7.83 2.82 3.36-5.81 1.54 2.53c-1.15 1.64-2.9 2.85-4.9 3.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxAperture;

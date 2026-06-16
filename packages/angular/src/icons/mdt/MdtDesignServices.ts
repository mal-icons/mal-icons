import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-design-services",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtDesignServices {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.91 9.28-1.3-1.3L5 17.59V19h1.41l9.61-9.61zm-5.08-0.35-1.2-1.2-1.19 1.19L7.02 7.5l1.19-1.18-1.27-1.28-1.9 1.9 3.89 3.89zm5.44 5.45-1.2-1.21-1.9 1.9 3.89 3.89 1.9-1.9-1.27-1.27-1.19 1.19-1.42-1.41zm-0.25-7.82 1.42-1.41 1.41 1.41-1.41 1.41z","opacity":".3"}],["path",{"d":"m20.97 5.86-2.83-2.83a11 0 0 0-1.41 0l-4.49 4.49-3.89-3.89c-0.78-0.78-2.05-0.78-2.83 0l-1.9 1.9c-0.780.78-0.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c0.950.95 2.230.6 2.83 0l1.9-1.9c0.78-0.780.78-2.05 0-2.83l-3.89-3.89 4.49-4.49a0.990.99 0 0 0-0.01-1.4zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zM6.41 19H5v-1.41l9.61-9.61 1.3 1.30.110.11L6.41 19zm10.09-2.02 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.2 1.2-1.19 1.19 1.42 1.42zm0.94-9-1.41-1.41 1.41-1.41 1.41 1.41-1.41 1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtDesignServices;

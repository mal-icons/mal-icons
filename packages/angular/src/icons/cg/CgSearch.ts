import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-search",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgSearch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M18.32 14.43C20.76 11.29 20.54 6.75 17.66 3.87C14.53 0.74 9.47 0.74 6.34 3.87C3.22 6.99 3.22 12.06 6.34 15.18C9.23 18.07 13.77 18.29 16.91 15.84C16.92 15.86 16.94 15.87 16.95 15.89L21.19 20.13C21.58 20.52 22.22 20.52 22.61 20.13C23 19.74 23 19.11 22.61 18.72L18.36 14.47C18.35 14.46 18.33 14.45 18.32 14.43ZM16.24 5.28C18.59 7.63 18.59 11.42 16.24 13.77C13.9 16.11 10.1 16.11 7.76 13.77C5.41 11.42 5.41 7.63 7.76 5.28C10.1 2.94 13.9 2.94 16.24 5.28Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgSearch;

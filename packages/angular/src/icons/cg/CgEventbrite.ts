import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-eventbrite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgEventbrite {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14.67 17.44C12.31 18.54 9.59 17.97 7.85 16.2L21.86 9.67C21.71 9.03 21.49 8.39 21.2 7.77C18.87 2.77 12.92 0.6 7.91 2.94C2.91 5.27 0.74 11.22 3.07 16.23C5.41 21.23 11.36 23.4 16.36 21.06C19.02 19.83 20.87 17.57 21.68 14.99H17.34C16.75 16.02 15.84 16.89 14.67 17.44ZM9.6 6.56C7.23 7.67 5.93 10.12 6.16 12.58L16.42 7.8C14.69 6.03 11.97 5.46 9.6 6.56Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgEventbrite;

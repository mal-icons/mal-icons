import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-edit-markup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgEditMarkup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24ZM18.58 19.53C20.68 17.7 22 15 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 14.96 3.29 17.62 5.33 19.45L7 10.97H9.17L12 6.07L14.83 10.97H17L18.58 19.53ZM16.09 21.13L15.21 12.97H8.79L7.91 21.13C9.16 21.69 10.54 22 12 22C13.46 22 14.84 21.69 16.09 21.13Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgEditMarkup;

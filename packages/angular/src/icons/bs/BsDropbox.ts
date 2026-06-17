import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-dropbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDropbox {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.01 4.56 4.01 7.11 8.01 9.66 4.01 12.22 0 9.65l4.01-2.56L0 4.56 4.01 2zm-4.03 8.49 4.01-2.56 4.01 2.56-4 2.56zm4.03-3.39 4.01-2.56L8.01 4.56 12 2 16 4.56 12 7.11 16 9.66l-4 2.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDropbox;

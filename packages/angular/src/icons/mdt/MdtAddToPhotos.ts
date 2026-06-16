import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-add-to-photos",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAddToPhotos {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4H8v12h12V4zm-1 7h-4v4h-2v-4H9V9h4V5h2v4h4v2z","opacity":".3"}],["path",{"d":"M4 22h14v-2H4V6H2v14c0 1.10.9 2 2 2zm4-4h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2zM8 4h12v12H8V4zm7 1h-2v4H9v2h4v4h2v-4h4V9h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAddToPhotos;

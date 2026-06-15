import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-photoscan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgPhotoscan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 8C9.55 8 10 7.55 10 7C10 6.45 9.55 6 9 6C8.45 6 8 6.45 8 7C8 7.55 8.45 8 9 8Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17 3C18.1 3 19 3.9 19 5V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V5C5 3.9 5.9 3 7 3H17ZM12.46 5H17V16H7L7 10.46C7.59 10.81 8.27 11 9 11C11.21 11 13 9.21 13 7C13 6.27 12.81 5.59 12.46 5ZM9 5C7.9 5 7 5.9 7 7C7 8.1 7.9 9 9 9C10.1 9 11 8.1 11 7C11 5.9 10.1 5 9 5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgPhotoscan;

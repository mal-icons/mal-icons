import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bookmark-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBookmarkX {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6.15 5.15a0.50.5 0 0 1 0.71 0L8 6.29l1.15-1.15a0.50.5 0 1 1 0.710.71L8.71 7l1.15 1.15a0.50.5 0 0 1-0.710.71L8 7.71 6.85 8.85a0.50.5 0 1 1-0.71-0.71L7.29 7 6.15 5.85a0.50.5 0 0 1 0-0.71"}],["path",{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a0.50.5 0 0 1-0.780.42L8 13.1l-5.22 2.82A0.50.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.57l4.72-2.48a0.50.5 0 0 1 0.55 0L13 14.57V2a1 1 0 0 0-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBookmarkX;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-music-note",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMusicNote {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 13c0 1.11-1.12 2-2.5 2S4 14.11 4 13s1.12-2 2.5-2 2.50.9 2.5 2"}],["path",{"fill-rule":"evenodd","d":"M9 3v10H8V3z"}],["path",{"d":"M8 2.82a1 1 0 0 1 0.8-0.98l3-0.6A1 1 0 0 1 13 2.22V4L8 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMusicNote;

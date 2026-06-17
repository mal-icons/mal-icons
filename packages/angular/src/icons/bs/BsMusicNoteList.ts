import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-music-note-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMusicNoteList {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 13c0 1.11-1.12 2-2.5 2S7 14.11 7 13s1.12-2 2.5-2 2.50.9 2.5 2"}],["path",{"fill-rule":"evenodd","d":"M12 3v10h-1V3z"}],["path",{"d":"M11 2.82a1 1 0 0 1 0.8-0.98l3-0.6A1 1 0 0 1 16 2.22V4l-5 1z"}],["path",{"fill-rule":"evenodd","d":"M0 11.5a0.50.5 0 0 1 0.5-0.5H4a0.50.5 0 0 1 0 1H0.5a0.50.5 0 0 1-0.5-0.5m0-4A0.50.5 0 0 1 0.5 7H8a0.50.5 0 0 1 0 1H0.5a0.50.5 0 0 1-0.5-0.5m0-4A0.50.5 0 0 1 0.5 3H8a0.50.5 0 0 1 0 1H0.5a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMusicNoteList;

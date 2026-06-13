import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-music-note-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMusicNote1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Music Note 1"}],["path",{"d":"M20.05,3.66a2.49,2.49,0,0,0-2.03-0.56l-7.88,1.33a2.48,2.48,0,0,0-2.08,2.46v8.82a3,3,0,1,0,1,2.23V9.39l10.88-1.83v6.22a2.94,2.94,0,0,0-2-0.77,3,3,0,1,0,3,3V5.57A2.51,2.51,0,0,0,20.05,3.66ZM6.06,19.94a2,2,0,1,1,2-2A1.99,1.99,0,0,1,6.06,19.94Zm11.88-1.93a2,2,0,1,1,2-2A2,2,0,0,1,17.94,18.01Zm2-11.46L9.06,8.38V6.89a1.48,1.48,0,0,1,1.25-1.47l7.88-1.33a1.49,1.49,0,0,1,1.75,1.48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMusicNote1;

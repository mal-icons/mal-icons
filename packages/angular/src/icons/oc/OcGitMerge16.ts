import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-git-merge-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGitMerge16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.45 5.15A4.25 4.25 0 0 0 9.25 7.5h1.38a2.25 2.25 0 1 1 0 1.5H9.25A5.73 5.73 0 0 1 5 7.12v3.51a2.25 2.25 0 1 1-1.5 0V5.37a2.25 2.25 0 1 1 1.95-0.22ZM4.25 13.5a0.750.75 0 1 0 0-1.50.750.75 0 0 0 0 1.5Zm8.5-4.5a0.750.75 0 1 0 0-1.50.750.75 0 0 0 0 1.5ZM5 3.25a0.750.75 0 1 0 0 0.01V3.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGitMerge16;

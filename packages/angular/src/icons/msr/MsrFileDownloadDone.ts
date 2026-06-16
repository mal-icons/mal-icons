import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-file-download-done",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFileDownloadDone {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M230-160q-13 0-21.5-8.5T200-190q0-13 8.5-21.5T230-220h500q13 0 21.5 8.5T760-190q0 13-8.5 21.5T730-160H230Zm150-183q-6 0-11-2t-10-7L175-536q-9-9-8.5-21t9.5-21q9-9 21-9t21 9l162 162 363-363q9-9 21-9t21 9q9 9 9 21.5t-9 21.5L401-352q-5 5-10 7t-11 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFileDownloadDone;

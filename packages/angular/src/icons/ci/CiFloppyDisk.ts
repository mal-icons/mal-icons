import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-floppy-disk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiFloppyDisk {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Floppy Disk"}],["path",{"d":"M20.02,7.02l-4.15-3.39a2.54,2.54,0,0,0-1.58-0.56H4.57a1.5,1.5,0,0,0-1.5,1.5v14.87a1.5,1.5,0,0,0,1.5,1.5h14.87a1.5,1.5,0,0,0,1.5-1.5V8.96A2.51,2.51,0,0,0,20.02,7.02ZM6.57,4.07h5.75v1.37a0.50.5,0,0,1-0.50.5H7.07a0.50.5,0,0,1-0.5-0.5Zm0,15.87v-5.93a1.5,1.5,0,0,1,1.5-1.5h7.87a1.5,1.5,0,0,1,1.5,1.5v5.93Zm13.37-0.5a0.50.5,0,0,1-0.50.5h-1v-5.93a2.51,2.51,0,0,0-2.5-2.5H8.07a2.5,2.5,0,0,0-2.5,2.5v5.93h-1a0.50.5,0,0,1-0.5-0.5V4.57a0.50.5,0,0,1,0.5-0.5h1v1.37a1.5,1.5,0,0,0,1.5,1.5h4.75a1.5,1.5,0,0,0,1.5-1.5V4.07h0.97a1.51,1.51,0,0,1,0.950.34l4.14,3.38a1.48,1.48,0,0,1,0.56,1.17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiFloppyDisk;

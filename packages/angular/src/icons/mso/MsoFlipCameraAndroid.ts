import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-flip-camera-android",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFlipCameraAndroid {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-140 0-248-86T93-389h61q30 111 120.5 180T480-140q98 0 180.5-50.5T788-328H657v-61h223v229h-59v-109q-57 88-147 138.5T480-80Zm1-299q-42 0-72-30t-30-72q0-42 30-72t72-30q42 0 72 30t30 72q0 42-30 72t-72 30ZM80-572v-228h60v107q57-88 146.5-137.5T480-880q140 0 248.5 85.5T868-572h-61q-30-111-121-180t-206-69q-97 0-179 51T173-633h131v61H80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFlipCameraAndroid;

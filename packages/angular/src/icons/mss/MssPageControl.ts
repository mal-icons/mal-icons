import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-page-control",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPageControl {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M150-400q-33 0-56.5-23.5T70-480q0-33 23.5-56.5T150-560q33 0 56.5 23.5T230-480q0 33-23.5 56.5T150-400Zm0-46q14.39 0 24.19-9.81Q184-465.61 184-480t-9.81-24.19Q164.39-514 150-514t-24.19 9.81Q116-494.38 116-480t9.81 24.19Q135.62-446 150-446Zm220 46q-33 0-56.5-23.5T290-480q0-33 23.5-56.5T370-560q33 0 56.5 23.5T450-480q0 33-23.5 56.5T370-400Zm0-46q14.39 0 24.19-9.81Q404-465.61 404-480t-9.81-24.19Q384.39-514 370-514t-24.19 9.81Q336-494.38 336-480t9.81 24.19Q355.62-446 370-446Zm220 46q-33 0-56.5-23.5T510-480q0-33 23.5-56.5T590-560q33 0 56.5 23.5T670-480q0 33-23.5 56.5T590-400Zm0-46q14.39 0 24.19-9.81Q624-465.61 624-480t-9.81-24.19Q604.39-514 590-514t-24.19 9.81Q556-494.38 556-480t9.81 24.19Q575.62-446 590-446Zm220 46q-33 0-56.5-23.5T730-480q0-33 23.5-56.5T810-560q33 0 56.5 23.5T890-480q0 33-23.5 56.5T810-400Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPageControl;

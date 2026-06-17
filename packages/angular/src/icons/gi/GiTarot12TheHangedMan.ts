import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-tarot-12-the-hanged-man",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTarot12TheHangedMan {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M254.1 398.33c16.73 0 30.32 18.54 30.32 41.37 0 22.84-13.58 41.38-30.32 41.38-16.73 0-30.32-18.54-30.32-41.38 0-22.83 13.58-41.37 30.32-41.37zm-27.52-5.41h-49.46c-49.53-30.22-33.99-49.28 7.73-66.02l-4.21 32.19 20.95 2.31 9.78-68.93h85.47l9.78 68.93 20.95-2.31-4.21-32.19c41.72 16.74 57.26 35.79 7.73 66.02h-49.46c-7.94-7.14-17.58-11.26-27.51-11.26-9.93 0-19.58 4.12-27.52 11.26zm70.83-118.78h-86.63l-13.67-28.06c37.99-10.44 75.98-11.83 113.97 0zm-96.15-48.05c12.53-3 25.06-5.05 37.59-6.03l-5.24-25.21 17.66-3.37 4.18-32.98-68.14 3.58zm60.95-6.61 17.41-147.76 20.760.9 2.52 83.38 32.47-1.7 2.5 20.63-34.2 6.53L305 225.35a202.15 202.15 0 0 0-42.78-5.88zm104.72-42.57 12.94-52.21-16.18-4.01-12.94 52.21zm-87.65-126.78 55.44-4.26-1.28-16.62-55.44 4.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTarot12TheHangedMan;
